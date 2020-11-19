import { action, observable } from "mobx";

export class storeDocumentInfo {
  @observable PageCount = 0;
  @observable WordsCount = 0;
  @observable ParagraphCount = 0;
  @observable SymbolsCount = 0;
  @observable SymbolsWSCount = 0;
  @observable isLoaded = false;
  @observable dataDoc = "";

  @action switchIsLoaded(value) {
    this.isLoaded = value;
  }

  @action changeCount(obj) {
    if (obj) {
      if (obj.get_PageCount() > -1) this.PageCount = obj.get_PageCount();
      if (obj.get_WordsCount() > -1) this.WordsCount = obj.get_WordsCount();
      if (obj.get_ParagraphCount() > -1)
        this.ParagraphCount = obj.get_ParagraphCount();
      if (obj.get_SymbolsCount() > -1)
        this.SymbolsCount = obj.get_SymbolsCount();
      if (obj.get_SymbolsWSCount() > -1)
        this.SymbolsWSCount = obj.get_SymbolsWSCount();
    }
  }

  @action setDataDoc(obj) {
    this.dataDoc = obj;
  }
}
