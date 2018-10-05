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
  });
});
