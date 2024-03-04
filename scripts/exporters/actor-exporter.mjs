import { AbstractExporter } from './abstract-exporter.mjs';

export class ActorExporter extends AbstractExporter {
  static getDocumentData(indexDocument, document, customMapping) {
    const { name, prototypeToken: { name: tokenName } = {} } = indexDocument;
    const documentData = { name, tokenName: tokenName ?? name };

    if (AbstractExporter._hasContent(document.items)) {
      documentData.items = {};

      for (const { name } of document.items) {
        documentData.items[name] = { name };
      }
    }

    AbstractExporter._addCustomMapping(customMapping, indexDocument, documentData);

    return documentData;
  }

  async _processDataset() {
    const documents = await this.pack.getIndex({
      fields: [
        'prototypeToken.name',
        ...Object.values(this.options.customMapping.actor).map((mapping) => mapping.value),
      ],
    });
    if('folders' in this.pack) {
      for (const folder of this.pack.folders){
        this.dataset.folders[folder.name] = folder.name;
      }
    }
    for (const indexDocument of documents) {
      let documentData = ActorExporter.getDocumentData(
        indexDocument,
        await this.pack.getDocument(indexDocument._id),
        this.options.customMapping.actor,
      );

      this.dataset.entries[indexDocument.name] = documentData;

      const document = await this.pack.getDocument(indexDocument._id);

      if (document.items.size) {
        documentData.items = {};

        for (const { name } of document.items) {
          documentData.items[name] = { name };
        }
      }

      documentData = foundry.utils.mergeObject(documentData, this.existingContent[indexDocument.name] ?? {});

      this._stepProgressBar();
    }
  }
}
