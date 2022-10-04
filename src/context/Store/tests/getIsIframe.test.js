// eslint-disable-next-line import/no-named-as-default, import/no-named-as-default-member
import getIsIframe from '../utils/getIsIframe';

let windowSpy;

describe('getIsIframe', () => {
  beforeEach(() => {
    // Mock window so getIsIframe will pass
    windowSpy = jest.spyOn(window, 'window', 'get');
    windowSpy.mockImplementation(() => ({
      parent: {
        location: Object.assign(new URL('https://ranker-dev.com'), {
          ancestorOrigins: 'dev',
          assign: jest.fn(),
          reload: jest.fn(),
          replace: jest.fn(),
        }),
      },
      location: Object.assign(new URL('https://ranker-stage.com'), {
        ancestorOrigins: 'stage',
        assign: jest.fn(),
        reload: jest.fn(),
        replace: jest.fn(),
      }),
      self: 'window.self',
      top: 'window.top',
      frameElement: true,
    }));
  });

  afterEach(() => {
    windowSpy.mockRestore();
  });

  it('should return true if the window object is available on the client', () => {
    const result = getIsIframe();

    expect(windowSpy).toHaveBeenCalledTimes(6);
    expect(result).toBe(true);
  });

  it('should return false if the window object is available on the server side', () => {
    const sameLocation = Object.assign(new URL('https://ranker-dev.com'), {
      ancestorOrigins: 'dev',
      assign: jest.fn(),
      reload: jest.fn(),
      replace: jest.fn(),
    });
    const sameSelf = 'window.self';

    windowSpy.mockImplementation(() => ({
      parent: {
        location: sameLocation,
      },
      location: sameLocation,
      self: sameSelf,
      top: sameSelf,
      frameElement: false,
    }));

    const result = getIsIframe();

    expect(windowSpy).toHaveBeenCalledTimes(3);
    expect(result).toBe(false);
  });
});
