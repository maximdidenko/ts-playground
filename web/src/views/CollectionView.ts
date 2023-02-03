import { Collection } from '../models/Collection';

export abstract class CollectionView<T, K> {
  constructor(
    public parent: HTMLElement,
    public collection: Collection<T, K>
  ) {}

  abstract renderItem(model: T, wrapper: HTMLElement): void;

  render() {
    this.parent.innerHTML = '';

    const templateElement = document.createElement('template');

    for (let model of this.collection.models) {
      const wrapper = document.createElement('div');
      this.renderItem(model, wrapper);
      templateElement.content.append(wrapper);
    }

    this.parent.append(templateElement.content);
  }
}
