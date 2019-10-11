# DoDee

DoDee is a super simple, web-based ToDo-List. You can try it out [here](https://dodee.netlify.com/) or host it yourself.

ToDos are currently only saved in your browsers local storage, so keep in mind that they are not super persisted. As you can see below, this will not be too problematic, though.

## Features
![](https://user-images.githubusercontent.com/3950661/66663858-c4cd4500-ec4b-11e9-86a4-898a270faee7.png)
By design, DoDee only has a today list, there are no projects with multiple lists. This is somewhat inspired by [Jason Freid](https://lifehacker.com/im-jason-fried-ceo-of-basecamp-and-this-is-how-i-work-1790556608):

> I have a small handful of things I know I need to do every day. If I can’t keep them in my head, I have too many things to do.

However, I like to write things down and tick them as I finish them, so there's that.

### Tags
Tasks can be assigned tags. Those are just used for filtering. There are no projects and tags are no distinct entity. If there are no more tasks with a certain tag, the tag does no longer exist.

![](https://user-images.githubusercontent.com/3950661/66663860-c565db80-ec4b-11e9-91ef-e283e78cc5fb.png)

### Importing Tasks
At the beginning of a new day, you have the chance to import tasks that did not get done the last day. This gives you a chance to re-evaluate the importance of the tasks. If you chose do dismiss it, it's gone forever. If you don't use the tool for a few days, the tasks will also be gone. If they were important, you will probably remember them.
![](https://user-images.githubusercontent.com/3950661/66663861-c565db80-ec4b-11e9-85e7-3a3942d1a220.png)

## Setup
#### Clone this repository
```
git clone git@github.com:Plsr/DoDee.git
```

#### Install the needed dependencies
```
yarn
```

#### Run the dev server
```
yarn serve
```
