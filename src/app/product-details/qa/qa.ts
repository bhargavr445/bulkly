import { ChangeDetectionStrategy, Component, input as routeInput, signal } from '@angular/core';
import { Field, form, required } from '@angular/forms/signals';

@Component({
  selector: 'bulkly-qa',
  imports: [Field],
  templateUrl: './qa.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Qa {

  id = routeInput.required<number>();

  qa = signal({ question: '' });

  qaResponse = signal([
    {
      question: {
        askedBy: 'Amit Verma',
        dateAskedOn: '10/14/2025',
        questionText: 'How often do I need to replace the filters?'
      },
      answer: {
        source: 'TechCraft Support Team',
        answerText: `The HEPA filter should be replaced every 12 months, and the carbon filter every 6 months. The app will notify you when it's time for replacement.`
      }
    },
    {
      question: {
        askedBy: 'Amit Verma',
        dateAskedOn: '10/14/2025',
        questionText: 'How often do I need to replace the filters?'
      },
      answer: {
        source: 'TechCraft Support Team',
        answerText: `The HEPA filter should be replaced every 12 months, and the carbon filter every 6 months. The app will notify you when it's time for replacement.`
      }
    },
    {
      question: {
        askedBy: 'Amit Verma',
        dateAskedOn: '10/14/2025',
        questionText: 'How often do I need to replace the filters?'
      },
      answer: {
        source: 'TechCraft Support Team',
        answerText: `The HEPA filter should be replaced every 12 months, and the carbon filter every 6 months. The app will notify you when it's time for replacement.`
      }
    }
  ]);

  qaForm = form(this.qa, (path) => {
    required(path.question, { message: 'Question is required.' })
  })

  postQuestion(event: Event): void {
    event.preventDefault();
  }

}
