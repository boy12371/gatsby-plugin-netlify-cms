import * as CMS from '@talves/netlify-cms-core';
/** Backends */
// import { Control as NetlifyCmsBackendGithub } from '@talves/netlify-cms-backend-github';
// import { Control as NetlifyCmsBackendGitlab } from '@talves/netlify-cms-backend-gitlab';
// import { Control as NetlifyCmsBackendGitGateway } from '@talves/netlify-cms-backend-git-gateway';
// import { Control as NetlifyCmsBackendBitbucket } from '@talves/netlify-cms-backend-bitbucket';
// import { Control as NetlifyCmsBackendTest } from '@talves/netlify-cms-backend-test';
/** Widgets */
import * as NetlifyCmsWidgetString from '@talves/netlify-cms-widget-string';
import * as NetlifyCmsWidgetNumber from '@talves/netlify-cms-widget-number';
import * as NetlifyCmsWidgetText from '@talves/netlify-cms-widget-text';
import * as NetlifyCmsWidgetImage from '@talves/netlify-cms-widget-image';
import * as NetlifyCmsWidgetFile from '@talves/netlify-cms-widget-file';
import * as NetlifyCmsWidgetDate from '@talves/netlify-cms-widget-date';
import * as NetlifyCmsWidgetDatetime from '@talves/netlify-cms-widget-datetime';
import * as NetlifyCmsWidgetSelect from '@talves/netlify-cms-widget-select';
import * as NetlifyCmsWidgetMarkdown from '@talves/netlify-cms-widget-markdown';
import * as NetlifyCmsWidgetList from '@talves/netlify-cms-widget-list';
import * as NetlifyCmsWidgetObject from '@talves/netlify-cms-widget-object';
import * as NetlifyCmsWidgetRelation from '@talves/netlify-cms-widget-relation';
import * as NetlifyCmsWidgetBoolean from '@talves/netlify-cms-widget-boolean';
import * as NetlifyCmsWidgetMap from '@talves/netlify-cms-widget-map';
/** MediaLibraries */
// import uploadcare from '@talves/netlify-cms-media-library-uploadcare';
// import cloudinary from '@talves/netlify-cms-media-library-cloudinary';
/** EditorComponents */
import image from '@talves/netlify-cms-editor-component-image';

/** Backends */
// CMS.registerBackend('git-gateway', NetlifyCmsBackendGitGateway);
// CMS.registerBackend('github', NetlifyCmsBackendGithub);
// CMS.registerBackend('gitlab', NetlifyCmsBackendGitlab);
// CMS.registerBackend('bitbucket', NetlifyCmsBackendBitbucket);
// CMS.registerBackend('test-repo', NetlifyCmsBackendTest);
/** Widgets */
CMS.registerWidget('string', NetlifyCmsWidgetString.controlComponent, NetlifyCmsWidgetString.previewComponent);
CMS.registerWidget('number', NetlifyCmsWidgetNumber.controlComponent, NetlifyCmsWidgetNumber.previewComponent);
CMS.registerWidget('text', NetlifyCmsWidgetText.controlComponent, NetlifyCmsWidgetText.previewComponent);
CMS.registerWidget('list', NetlifyCmsWidgetList.controlComponent, NetlifyCmsWidgetList.previewComponent);
CMS.registerWidget('markdown', NetlifyCmsWidgetMarkdown.controlComponent, NetlifyCmsWidgetMarkdown.previewComponent);
CMS.registerWidget('image', NetlifyCmsWidgetImage.controlComponent, NetlifyCmsWidgetImage.previewComponent);
CMS.registerWidget('file', NetlifyCmsWidgetFile.controlComponent, NetlifyCmsWidgetFile.previewComponent);
CMS.registerWidget('date', NetlifyCmsWidgetDate.controlComponent, NetlifyCmsWidgetDate.previewComponent);
CMS.registerWidget('datetime', NetlifyCmsWidgetDatetime.controlComponent, NetlifyCmsWidgetDatetime.previewComponent);
CMS.registerWidget('select', NetlifyCmsWidgetSelect.controlComponent, NetlifyCmsWidgetSelect.previewComponent);
CMS.registerWidget('object', NetlifyCmsWidgetObject.controlComponent, NetlifyCmsWidgetObject.previewComponent);
CMS.registerWidget('relation', NetlifyCmsWidgetRelation.controlComponent, NetlifyCmsWidgetRelation.previewComponent);
CMS.registerWidget('boolean', NetlifyCmsWidgetBoolean.controlComponent);
CMS.registerWidget('map', NetlifyCmsWidgetMap.controlComponent, NetlifyCmsWidgetMap.previewComponent);
/** MediaLibraries */
// CMS.registerMediaLibrary(uploadcare);
// CMS.registerMediaLibrary(cloudinary);
/** EditorComponents */
CMS.registerEditorComponent(image);

if (typeof window !== 'undefined') {
  window['CMS'] = CMS;
}

export { CMS as default };
