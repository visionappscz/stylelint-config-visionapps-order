const stylelint = require('stylelint');
const config = require('..');

const validCss = (`
.selector::before {
    content: '';
    position: relative;
}
`);

const invalidCss = (`
.selector::before {
    position: relative;
    content: '';
}
`);

describe('flags no warnings with valid CSS', () => {
  let result;

  beforeEach(() => {
    result = stylelint.lint({
      code: validCss,
      config,
    });
  });

  it('did not error', () => (
    result.then((data) => (
      expect(data.errored).toBeFalsy()
    ))
  ));

  it('flags no warnings', () => (
    result.then((data) => (
      expect(data.results[0].warnings.length).toBe(0)
    ))
  ));
});

describe('flags warnings with invalid CSS', () => {
  let result;

  beforeEach(() => {
    result = stylelint.lint({
      code: invalidCss,
      config,
    });
  });

  it('did error', () => (
    result.then((data) => (
      expect(data.errored).toBeTruthy()
    ))
  ));

  it('flags one warning', () => (
    result.then((data) => (
      expect(data.results[0].warnings.length).toBe(1)
    ))
  ));
});
