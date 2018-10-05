import { mount } from '@vue/test-utils';
import Message from '../src/components/Message';
describe('Message.test.js', () => {
  let cmp;
  const createCmp = propsData => mount(Message, { propsData });

  describe('Properties', () => {
    // Testing property existence
    it('has a message property', () => {
      cmp = createCmp({ message: 'hey' });
      expect(cmp.props().message).toBe('hey');
    });

    it('has no cat property', () => {
      cmp = createCmp({ message: 'hey', cat: 'hey' });
      expect(cmp.props().cat).toBeUndefined();
      expect(cmp.attributes().cat).toBe('hey');
    });

    it('Paco is the default author', () => {
      cmp = createCmp({ message: 'hey' });
      expect(cmp.props().author).toBe('Paco');
    });
    describe('Validation', () => {
      // Asserting properties validation
      const message = createCmp({ message: 'hey' }).vm.$options.props.message;

      it('message is of type string', () => {
        expect(message.type).toBe(String);
      });

      it('message is required', () => {
        expect(message.required).toBeTruthy();
      });

      it('message has at least length 2', () => {
        expect(message.validator && message.validator('a')).toBeFalsy();
        expect(message.validator && message.validator('aa')).toBeTruthy();
      });
    });
  });
});
