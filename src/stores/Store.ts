import { computed, observable } from 'mobx'
import { promisedComputed } from 'computed-async-mobx'

class Store {
  @observable locale = window.localStorage.getItem('locale') || 'en';

  @computed get messages() {
    return this.getMessagesAsync.get()
  }

  private _messages: any = {};

  private getMessagesAsync = promisedComputed({}, async () => {
    if (typeof this._messages[this.locale] !== 'undefined') {
      return this._messages[this.locale]
    }

    const response =  await fetch(`/translations/messages.${this.locale}.json`)
    const data = await response.json()

    this._messages[this.locale] = data

    return data
  });
}

export const store = new Store()
