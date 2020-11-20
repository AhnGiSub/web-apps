import { action, observable } from "mobx";

export class storeDocumentInfo {
  @observable infoObj = {
    pageCount: 0,
    wordsCount: 0,
    paragraphCount: 0,
    symbolsCount: 0,
    symbolsWSCount: 0,
  };
  @observable isLoaded = false;
  @observable dataDoc;

  @action switchIsLoaded(value) {
    this.isLoaded = value;
  }

  @action changeCount(obj) {
    if (obj) {
      if (obj.get_PageCount() > -1)
        this.infoObj.pageCount = obj.get_PageCount();
      if (obj.get_WordsCount() > -1)
        this.infoObj.wordsCount = obj.get_WordsCount();
      if (obj.get_ParagraphCount() > -1)
        this.infoObj.paragraphCount = obj.get_ParagraphCount();
      if (obj.get_SymbolsCount() > -1)
        this.infoObj.symbolsCount = obj.get_SymbolsCount();
      if (obj.get_SymbolsWSCount() > -1)
        this.infoObj.symbolsWSCount = obj.get_SymbolsWSCount();
    }
  }

  @action setDataDoc(obj) {
    this.dataDoc = obj;
  }
}
