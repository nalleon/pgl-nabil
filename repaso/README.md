# Emmet for VSCode

## Index
* [HTML](#html)
    - [Classes](#classes)
    - [Id](#id)
    - [Content](#content)
    - [Siblings & Children](#sibling--children)
    - [Grouping](#grouping)
    - [Multiplication](#multiplication)
    - [Name in sequence](#name-in-sequence)
* [CSS](#css)



## HTML 

### Classes
```
div.example ==> <div class="example"> </div>
```

### Id

```
div#example ==> <div id="example"> </div>
```

### Attributes

```
img[src="example.jpg"][alt="description of the pic"] ==> <img src="example.jpg" alt="description of the pic"/>
```

### Content
```
p{example paragraph} ==> <p>example paragraph</p>
```

### Sibling & Children

* Siblings
```
section+section ==> <section></section><section></section>
```
* Children
```
ul>li ==> <ul><li></li></ul>
```

### Grouping

```
div>(header>ul>li>a)+footer>p ==> <div>
                                    <header>
                                         <ul>
                                           <li><a href=""></a></li>
                                         </ul>
                                   </header>
                                 <footer>
                                     <p></p>
                                 </footer>
                                 </div>
```

### Multiplication

```
ul>li*3 ==> <ul>
                <li></li>
                <li></li>
                <li></li>
            </ul>
```

### Name in sequence

* Pad with zeros
```
ul>li.item$$$*3 ==> <ul>
                        <li class="item001"></li>
                        <li class="item002"></li>
                        <li class="item003"></li>
                    </ul>
```
* Start with specific number
```
ul>li.item@3*3 ==>  <ul>
                        <li class="item3"></li>
                        <li class="item4"></li>
                        <li class="item5"></li>
                    </ul>
```
* Reverse order/direction
```
ul>li.item$@-*3 ==> <ul>
                        <li class="item3"></li>
                        <li class="item2"></li>
                        <li class="item1"></li>
                    </ul>
```

<br>

## CSS

_In progress._