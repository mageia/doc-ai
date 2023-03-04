import { App, Modal, Setting } from "obsidian";

export class InsertLinkModal extends Modal {
  linkText: string;
  linkUrl: string;

  onSubmit: (linkText: string, linkUrl: string) => void;

  constructor(
    app: App, 
    defaultLinkText: string,
    onSubmit: (linkText: string, linkUrl: string) => void
  ) {
    super(app);
    this.linkText = defaultLinkText;
    this.onSubmit = onSubmit;
  }

  onOpen() {
    const { contentEl } = this;

    contentEl.createEl("h1", { text: "Insert link" });

    new Setting(contentEl)
      .setName("Link text")
      .addText((text) =>
        text
          .setPlaceholder("Link text")
          .setValue(this.linkText)
          .onChange((value) => {
            this.linkText = value;
          })
      );

    new Setting(contentEl)
      .setName("Link URL")
      .addText((text) =>
        text
          .setPlaceholder("Link URL")
          .setValue(this.linkUrl)
          .onChange((value) => {
            this.linkUrl = value;
          })
      );

    new Setting(contentEl).addButton((button) =>
      button
        .setButtonText("Insert link")
        .setCta()
        .onClick(() => {
          this.onSubmit(this.linkText, this.linkUrl);
          this.close();
        })
    );
  }

  onClose() {
    let { contentEl } = this;
    contentEl.empty();
  }
}
