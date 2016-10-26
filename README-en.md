# JStruct

JStruct is a short `struct()` module for planning what functions you will need in an object.

Inspired by `struct xxx { }` of Golang. **ES6** is required.

## Getting Started In 1 Second

Let's say you have an object for a chat room, and it look like this:

```js
{
    article_id: 1,
    messages  :
    [
        // A message
        {
            user_id  : 15,
            content  : 'Moon, Dalan!',
            reactions:
            [
                // An emotion
                {
                    icon : ':)',
                    count: 3
                }
            ]
        }
    ]
}
```

Ughhh that was terrible. Let's make them separated into `Chatroom` (a single chat room), `Message` (a single message) and `Reaction` (a single emotion). This sounds much easier, doesnt it? Next we are doing this with JStruct:

```js
// A single chat room
var Chatroom = struct
(`
    article_id int       // Integer
    messages   []Message //
`)

// A single message
var Message = struct
(`
    user_id   int        // Integer
    content   string     // String
    reactions []Reaction // An array with type Reaction
`)

// A single emotion
var Reaction = struct
(`
    icon  string // String
    count int    // Integer
`)
```

Great! It looks much more likely sturctured than before. We are implementing it like below.

```js
// Directly
var data = new Chatroom(1, [ new Message(15, 'Moon, Dalan!',[ new Reaction(':)', 3) ]) ])

// Or...
var data = new Chatroom
(
    1,
    [
        // A single message
        new Message
        (
            15,
            'Moon, Dalan!',
            [
                // A single emotion
                new Reaction
                (
                    ':)',
                    3
                )
            ]
        )
    ]
)
```

### Specified Keys

You may think: "*What the _? Isn't this even worse?"
Relax, this happens on most people.

JStruct also supports specifying keys just like regular objects. But why would you need JStruct anymore?
Perhaps you can make it much clearer of its structure.

```js
var data = new Chatroom
({
    article_id: 1,
    messages  :
    [
        // A single message
        new Message
        ({
            user_id  : 15,
            content  : 'Moon, Dalan!',
            reactions:
            [
                // A single emotion
                new Reaction
                ({
                    icon : ':)',
                    count: 3
                })
            ]
        })
    ]
})
```

## Data types

You might realised that there's a data type just after every keys.
Actually, it's just a mark for you, it doesn't do a sh_t.

But we still hope you can follow the style of writing below.

```js
string   // String
int      // Integer
float    // Double
bool     // Boolean
null|int // Null or Integer
React    // A type with a React object
[]Emoji  // An array with only Emoji objects in it
```

Or if you like, you can of course write them in Chinese, or any other languages. Like the weird example below.

```js
var data = new Example
(`
    user_id 數值
    content 字串
`)

var data2 = new Example
(`
    user_id 數值 使用者帳號
    content 字串 訊息內容
    time    數值 訊息發送時間
`)
```
