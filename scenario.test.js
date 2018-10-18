
describe('sample.html', function() {
  it('displays 42', function() {
    console.log('111')
    browser().navigateTo('sample.html');

    expect(element('#content').text()).toBe('42');
  });
});
