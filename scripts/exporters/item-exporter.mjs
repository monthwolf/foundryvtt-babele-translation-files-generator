import { AbstractExporter } from './abstract-exporter.mjs';

export class ItemExporter extends AbstractExporter {
  static getDocumentData(indexDocument, customMapping) {
    const { name } = indexDocument;
    const documentData = { name };

    AbstractExporter._addCustomMapping(customMapping, indexDocument, documentData);

    return documentData;
  }

  async _processDataset() {
    const documents = await this.pack.getIndex({
      fields: [...Object.values(this.options.customMapping.item).map((mapping) => mapping.value)],
    });
    if('folders' in this.pack) {
      for (const folder of this.pack.folders){
        this.dataset.folders[folder.name] = folder.name;
      }
    }
    for (const indexDocument of documents) {
      this.dataset.entries[indexDocument.name] = foundry.utils.mergeObject(
        ItemExporter.getDocumentData(
          indexDocument,
          this.options.customMapping.item,
        ),
        this.existingContent[indexDocument.name] ?? {},
      );

      this._stepProgressBar();
    }
  }
}
