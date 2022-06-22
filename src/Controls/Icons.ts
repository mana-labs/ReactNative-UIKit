import {IconsInterface} from '../Contexts/PropsContext';

const icons: IconsInterface = {
  videocam:
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPoAAAD6CAYAAACI7Fo9AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAewQAAHsEBw2lUUwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAATNSURBVHic7dm9ip1VFMfhf4xBcFKIiF+JoEU6BbGwEPEDtBIlF2Bp6w3YeRGCXkBQO8VCiIUW6gUEu1QqihZJQExAg8TizOA4zpz5xPXuvZ4HFlPuxcz7Y895TwIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALAkp6oXWONMkueTPJ7kwdpVKHIzyY9Jvk5yrXgXTtj5JB8kuZHkjjFJbif5IsmLYQpvJ7mV+gfLLHc+TnI2DOlUkvdS/xCZMeZKkofCcN5J/cNjxppvktwTDuR09QJJnknyYZb9YpDleWzz55elWxzcRlbvGtq6nPrbwYw5vyd5JMt3IcmlygXuqjw8q6/OXi3egXFtJHmzeol9XMjqv45HK5eoDv1i8fmM743qBda4kOSrJOeK9ygP/ani8xnfk9UL7GERN/mW6tAfLj6f8d2X5N7qJXZYzE2+pTr0pf2BGNNG9QLbLOom31IdOsxkK/LF3ORbhA4nY7GRJ0KHk7DoyBOhw3EtPvJE6HAcQ0SeCB2OapjIE6HDUQwVeSJ0OKzhIk+EDocxZOSJ0OGgho08ETocxNCRJ0KH/QwfeSJ0WGeKyBOhw16miTwROuxmqsgTocNO00WeCB22mzLyROiwZdrIE6FDMnnkidBh+sgTodNbi8gTodNXm8gTodNTq8gTodNPu8gTodNLy8gTodNH28gTodND68gToTO/9pEnQmduIt8kdGYl8m2EzoxEvoPQmY3IdyF0ZiLyPQidWYh8DaEzA5Hv4+7qBeAEfJbk/uollsyNzgxEvg+hQwNChwaEDg0IHRoQOjQgdGhA6NCA0KEBoUMDQocGhA4NCB0aEDo0IHRoQOjQgNChAaFDA0KHBoQODQgdGhA6NCB0aEDo0IDQoQGhQwNChwaEDg0IHRoQOjQgdGZwvXqBpRM6M3g9yU/VSyyZ0JnB1SQvR+x7EjqzEPsaQmcmYt+D0JmN2HchdGYk9h2EzqzEvo3QmZnYNwmd2Yk9QqeH9rELnS5axy50Omkbu9DppmXsQqejdrELna5axS50OmsTu9DprkXsQocGsQsdVqaOXejwj2ljFzr825SxCx3+a7rYhQ67myp2ocPepold6LDeFLELHfY3fOxCh4MZOnahw8ENG7vQ4XCGjF3ocHjDxS50OJqhYhc6HN0wsQsdjmeI2IUOx7f42IUOJ2PRsQsdTs5iY68O/Vbx+czhZvUC22zF/nP1IttVh76oXwZDupHlXRhXk7yUBd3s1aF/V3w+41vqM7Som7069E+S3CnegbF9Wr3AGou52atD/z7J5eIdGNfNJJeql9jHom72Sk8n+Surm92Yw8y7GcdG5eGnKw/f9EuSP5K8Ur0IQ/k2yVtZXRIjuF15+BJCT5JvkjyQ5NnqRRjClSSvJfmtepFRLCX0JPk8ybWsXl6cqV2FBfsoycWsvlZjYOeSvJ/keuo/A5plzO2sXtq+EI7kVPUCa5xJ8lySJ5KcT3K2dh3+Z38m+TXJD1l9tLteuw4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAn52/kmGqsu74x2wAAAABJRU5ErkJggg==',
  videocamOff:
    'data:image/png;base64,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',
  mic:
    'data:image/png;base64,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',
  micOff:
    'data:image/png;base64,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',
  switchCamera:
    'data:image/png;base64,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',
  callEnd:
    'data:image/png;base64,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',
  remoteSwap:
    'data:image/png;base64,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',
  close:
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPoAAAD6CAYAAACI7Fo9AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAewQAAHsEBw2lUUwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAATASURBVHic7d27dtw2FEDRm4y/Kpkin6nWnb8vSp8UE8aKLY34wOsCe6/FegCCh6g4iAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgDncIuIlIu69B0Ix93is6a33QBjDLSK+RsTfEfFXRPzRdTSU8HtE/BmPNf0WEV/6Dofe3ka+XWLP7W3k2yX2hb0Xudhzey9ysS/sWeRiz+lZ5GJf0J7IxZ7LnsjFvpAjkYs9hyORi30BZyIX+9jORC72iV2JXOxjuhK52CdUInKxj6VE5GKfSMnIxT6GkpGLfQI1Ihd7XzUiF3tiNSMXex81Ixd7Qi0iF3tbLSIXezIv0eaB2K7X8NVbTfd43OOWa/rSZGZc8lu0e/vb2etquZNby4TEnp/I2UXseYmcQ8Sej8g5Rex5iJxLxD4+kVOE2MclcooS+3hEThViH4fIqUrs/YmcJsTej8hpSuztiZwuxN6OyOlK7PWJnCGIvR6RMxSxlydyhiT2ckTO0MR+nchJQezniZxUxH6cyElJ7PuJnNTE/jmRMwWxf0zkTEXsPxM5UxL7dyJnamIXOYtYOXaRs5QVYxc5S1opdpGztBViFznE3LGLHN6YMXaRwztmil3k8MQMsYscdsgcu8jhgIyxixxOyBS7yOGCDLGLHAoYOXaRQ0Ejxi5yqGCk2EUOFY0Qu8ihgZ6xixwaukfEa7QN7rXTb94L3TNIqcfObieHDmaNXeTwg9liFzl8YJbYRQ6fyB67yGGnrLGLHA7KFrvI4aQssYscLho9dpFDIaPGLnIobLTYRQ6VjBK7yKGy3rGLHBrpFbvIk/q19wA45ZfeAwDq6vGnEXZ1aKh35GKHykaJXOxQyWiRix0KGzVysUMho0cudrgoS+Rih5OyRS52OChr5GKHnbJHLnb4xCyRix0+MFvkYocfzBq52OFfDlmEyfU8uniE89lheiOcTy52qGiEyDdihwpGinwjdihoxMg3YocCRo58I3a4IEPkG7HDCZki34gdDsgY+UbssEPmyDdihydmiHwjdnjHTJFvxA5vzBj5RuwQc0e+ETtLWyHyjdhZ0kqRb8TOUlaMfCN2lrBy5BuxMzWRfyd2piTyn4mdqYj8Y2JnCiL/nNhJTeT7iZ2URH6c2ElF5OeJnRREfp3YGZrIyxE7QxJ5eWJnKCKvR+wMQeT1iZ2uRN6O2OlC5O2JnaZE3o/YaULk/YmdqkQ+DrFThcjHI3aKEvm4xE4RIh+f2LlE5HmInVNEno/YOUTkeYmdXUSen9h5SuTzEDsfeom2D8ZrRNybzGxN93jc45Zr+tJkZlxyi4iv4e0/k5Y7+7eI+NJmWlzVInaRt9UidpEnVDN2kfdRM3aRJ1YjdpH3VSN2kU+gZOwiH0PJ2EU+kRKxi3wsJWIX+YSuxC7yMV2JXeQTOxO7yMd2JnaRL+BI7CLP4UjsIl/InthFnsue2EW+oGexizynZ7GLfGHvxS7y3N6LXeT8L3aRz+Ft7CLnP7d4fLHkK7R53OOxprfeAwEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgBL+Ad6mM5i7MhQ8AAAAAElFTkSuQmCC',
  chat: 
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAVCAYAAACpF6WWAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAC3SURBVHgB7ZQNDcIwEIVfCQKQUAlYQAFIqAUUEBQggTlgUoaCVQIOyjtyTQ5YGdkgIcCXXO4nt9dtdynw59W4HKSUPN2ONsMw1s655qpC0SqNY5+1JngD3yFa06LGJ1qlHlqv0cfNoFqtBTsE0xM0b7sGNS2c4dl0oJ9rvmIufqn5hrnEvuvhkuhFyMSyu8EeioKg8OMr9eifyvo0eA7p3faJRtqCF0TEAOzn57c6jhG8Q6+/z+QMN8uaJazP0ywAAAAASUVORK5CYII=',
  menu:
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADxSURBVHgB7dXhDYIwEIbhixM4giM4gpvAJrCKG7iBboAblA1wg7MESNBA22vKv/dJLsHc+eUIgYoAAAAAAAAAAADgCKp69tX4cjpx8++zZPD/u/l6+hrmvPH6KhlK77YEvnVbZw3285Xuq4xZRXdbQhsNaw1Zl9WT2DJYliy52zrURUKdIavWuNqQ53J3OwVyLxIW61tnU2ZSZ3f7oRvuJSzWt86mzKTO7vZDN3yXsFh/7eHrE+j3vl6SruRuE52+hN3OOzJ+Ia1f6brE+3vEbv/Brf6eda3mn8NXnc7e0TBf3yRD6d0AAAAAAAAAADjCFyk9N7282nLyAAAAAElFTkSuQmCC',
};

export default icons;
