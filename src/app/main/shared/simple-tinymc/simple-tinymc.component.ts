import { Component, OnInit, OnDestroy, AfterViewInit, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import * as tinymce from 'tinymce';

@Component({
  selector: 'app-simple-tinymc',
  templateUrl: './simple-tinymc.component.html',
  styleUrls: ['./simple-tinymc.component.css']
})
export class SimpleTinymcComponent implements AfterViewInit, OnDestroy {

  @Input() elementId: String;
  @Output() onEditorKeyup = new EventEmitter<any>();
  @Input() content: string;
  editor;

  ngAfterViewInit() {
    tinymce.baseURL = "/assets/tinymce";
    tinymce.init({

      selector: '#' + this.elementId,
      // language: 'vi_VN',
      // skin_url: '/assets/tinymce/skins/lightgray',
      // language_url: '/assets/tinymce/langs/vi_VN.js',
      plugins: "autosave autolink code codesample colorpicker emoticons fullscreen hr image imagetools media preview table textcolor wordcount",
      toolbar: "imageupload forecolor cut copy paste fontselect styleselect bold italic bold link preview code image",
      setup: editor => {
        this.editor = editor;
        editor.on('keyup', () => {
          const content = editor.getContent();
          this.onEditorKeyup.emit(content);
        });
        editor.on('init', () => {
          editor.setContent(this.content);
        });
      },

    });

  }

  ngOnDestroy() {
    tinymce.remove(this.editor);
  }
}
