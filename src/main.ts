import { Editor, Plugin } from "obsidian";
import { InsertLinkModal } from "./modal";

export default class PluginDocAI extends Plugin {
	async onload() {
    this.addCommand({
      id: "insert-link",
      name: "Insert link",
      editorCallback: (editor: Editor) => {
        const selectedText = editor.getSelection();

        const onSubmit = (text: string, url: string) => {
          editor.replaceSelection(`[${text}](${url})`);
        };

        new InsertLinkModal(this.app, selectedText, onSubmit).open();
      }
    });
  }
}
