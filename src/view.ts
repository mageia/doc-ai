import {ItemView, WorkspaceLeaf} from 'obsidian'; 
import Component from './component.svelte';

export const VIEW_TYPE = 'my-view';

export class MyView extends ItemView {
  component: Component;

  constructor(leaf: WorkspaceLeaf) {
    super(leaf);
  }

  getViewType() {
    return VIEW_TYPE;
  }

  getDisplayText() {
    return 'My View';
  }

  async onOpen() {
    this.component = new Component({
      target: this.contentEl,
      props: {
        variable: 1,
      },
    });
  }

  async onClose() {
    this.component.$destroy();
  }
}
