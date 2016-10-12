# JStruct

JStruct 是一個簡短的 `struct()` 函式，用來規劃 Object 時所會用到的函式，

其靈感來自 Golang 的 `struct xxx { }`，**ES6** 是必須的。

## 簡單上手

讓我們假設你有聊天室專用的 Object，而且他長得像這樣。

```js
{
    article_id: 1,
    messages  :
    [
        // 一個訊息
        {
            user_id  : 15,
            content  : 'Moon, Dalan!',
            reactions:
            [
                // 一個表情
                {
                    icon : ':)',
                    count: 3
                }
            ]
        }
    ]
}
```

天阿，這真是太恐怖了，讓我們透過 JStruct 將上述物件拆成 `Chatroom`（單個聊天室）, `Message`（單個訊息）, `Reaction`（單個表情）吧，這聽起來簡單多了？對吧？接下來我們像這樣規劃它。

```js
// 單個聊天室
var Chatroom = struct
(`
    article_id int       // 數值
    messages   []Message // 是一個帶有 Message 種類的陣列
`)

// 單個訊息
var Message = struct
(`
    user_id   int        // 數值
    content   string     // 字串
    reactions []Reaction // 是一個帶有 Reaction 種類的陣列
`)

// 單個表情
var Reaction = struct
(`
    icon  string // 字串
    count int    // 數值
`)
```

太好了！看起來有結構多了，然後我們這樣實作。

```js
// 你可以直接這樣
var data = new Chatroom(1, [ new Message(15, 'Moon, Dalan!',[ new Reaction(':)', 3) ]) ])

// 或者是攤開來看看
var data = new Chatroom
(
    1, 
    [
        // 一個訊息
        new Message
        (
            15,
            'Moon, Dalan!',
            [
                // 一個表情
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

### 指定鍵值

你可能會覺得：「*蛤？？這是三小？？？不是更糟了嗎？*」，請放心，這是很多人所經歷過的心情轉變，

為此你可以直接指定鍵值，就像傳統物件般，不過這樣的話你為什麼需要 JStruct 呢？也許是能夠協助你釐清結構性吧。

```js
var data = new Chatroom
({
    article_id: 1, 
    messages  :
    [
        // 一個訊息
        new Message
        ({
            user_id  : 15,
            content  : 'Moon, Dalan!',
            reactions:
            [
                // 一個表情
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

## 資料型別

你也許意識到了，在鍵名後面有個資料型別，這事實上只是協助你標記用的，那**並沒有真正的效果**，

不過我們也希望你能夠遵守像下面這樣的寫作規範，當然這並不是強制地。

```js
string   // 字串
int      // 數值
float    // 浮點數
bool     // 布林值
null|int // 可能是 Null 值或是 數值
React    // 一個帶有 React 物件的種類
[]Emoji  // 一個陣列而且裡面都是 Emoji 物件的種類
```

要是你喜歡，你也可以寫成中文的資料型別，像下面這個詭譎的範例。

```js
var data = new Example
(`
    user_id 數值
    contrnt 字串
`)

var data2 = new Example
(`
    user_id 數值 使用者帳號
    contrnt 字串 訊息內容
    time    數值 訊息發送時間
`)
```
