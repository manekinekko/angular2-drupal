
import {bootstrap} from 'angular2/platform/browser';
import {Component, Pipe, PipeTransform} from 'angular2/core';

@Pipe({
	name: 't'
})
class TwigPipe implements PipeTransform {
	transform(value: string, args: string[]): any {
		return value;
	}
}

@Component({
	selector: 'angular2-comment-list',
	template: 'angular2-comment-list'
})
class NgCommentList {

}

@Component({
	selector: 'angular2-comment-form',
	template: 'angular2-comment-form'
})
class NgCommentForm {

}

@Component({
	selector: 'angular2-comment-field',
	templateUrl: '/core/themes/classy/templates/field/field--comment.html.ng2',
	pipes: [TwigPipe],
	directives: [NgCommentList, NgCommentForm]
})
class NgCommentField {

	private class: string = [
    'field',
    'field--name-',
    'field--type-',
    'field--label-',
    'comment-wrapper'
  ].join(' ');

  private title_classes: string = [
		'title',
		'visually-hidden'
	].join(' ');

	private label_hidden: boolean = true;
	private label: string = 'Angular 2 comments';
	private title_prefix: string = 'prefix_';
	private title_suffix: string = '_suffix';

}

@Component({
	selector: 'angular2-comment',
	template: '<angular2-comment-field></angular2-comment-field>',
	directives: [NgCommentField]
})
class NgCommentsApp {}

bootstrap(NgCommentsApp, [])
  .catch(err => console.error(err));