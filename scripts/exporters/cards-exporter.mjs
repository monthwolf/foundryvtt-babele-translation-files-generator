import { AbstractExporter } from './abstract-exporter.mjs';

export class CardsExporter extends AbstractExporter {
  static getDocumentData(indexDocument, document) {
    const { name, description } = indexDocument;
    const documentData = { name, description };

    if (AbstractExporter._hasContent(document.cards)) {
      documentData.cards = {};

      for (const { name, description, back, faces } of document.cards) {
        documentData.cards[name] = { name, description, back, faces };
      }
    }

    return documentData;
  }

  async _processDataset() {
    const documents = await this.pack.getIndex();

    for (const indexDocument of documents) {
      this.dataset.entries[indexDocument.name] = CardsExporter.getDocumentData(
        indexDocument,
        await this.pack.getDocument(indexDocument._id),
      );

      this._stepProgressBar();
    }
  }
}
