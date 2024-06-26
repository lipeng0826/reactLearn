# 现代开发方式

1. 组件化开发
   传统开发方式:
   所有代码都是在一起的；比较乱；
   React: 1.基于组件，降低了耦合性，提高了复用性；

2. 虚拟 DOM
   传统开发方式: 1.直接操作 dom，效率不高；
   React: 2.通过虚拟 dom 的 patch，提高了对比效率；

3. 单向数据流
   传统开发方式:
   数据流动是不固定的，杂乱的；  
   React:
   在 react 中数据是从上往下流动的；通过更好的数据流动方式，便于调试和维护；

4. 声明式编程
   传统开发方式:
   命令式编程，开发者需要详细描述每一步操作，直接操作 DOM。
   React:
   声明式编程，开发者只需要描述状态和 UI。不用手动去操作 DOM。


声明式编程和命令式编程在对人的心智负担上的不同主要体现在代码的抽象程度、思考方式、和可读性上。以下是详细分析：

声明式编程
特点：

描述目标：开发者专注于描述**“要做什么”，而不是“如何做”**。
高层次抽象：使用更高层次的抽象来描述程序逻辑，减少了细节管理。
心智负担：

简化思考：由于开发者只需关注最终目标和结果，而不需要关心实现细节，这大大简化了思考过程。例如，在React中，开发者只需描述UI在不同状态下应该是什么样子的，而不需要手动操作DOM来更新UI。
减少错误：因为不需要详细描述每个步骤，声明式代码更少出错的机会。例如，在数据库查询中使用SQL，开发者只需描述查询的条件，而不需要实现遍历和筛选数据的过程。
可读性和维护性：声明式代码通常更易读，更易理解，逻辑更加清晰，便于后续维护和更新。
命令式编程
特点：

描述过程：开发者需要详细描述**“如何做”**，一步步告诉计算机如何实现某个功能。
低层次抽象：代码包含了大量的细节，开发者需要管理每个步骤和状态。
心智负担：

复杂思考：开发者需要思考每个步骤的实现细节，这增加了心智负担。例如，在操作DOM时，开发者需要手动添加、修改和删除节点，管理复杂的状态变化。
容易出错：详细描述每个步骤容易导致错误，尤其是在处理复杂逻辑和多状态变化时。例如，遍历一个数组并修改其中的元素时，可能会因为边界条件处理不当而产生错误。
可读性和维护性：命令式代码可能因为细节繁多而变得难以阅读和理解，后续的维护和更新变得更加困难。
对比与结论
思维模式：

声明式编程：更接近自然语言，描述结果而非过程，降低了心智负担。开发者可以更专注于业务逻辑，而不是实现细节。
命令式编程：需要开发者以计算机的角度思考，详细描述每个步骤和状态，心智负担较重。
抽象层次：

声明式编程：高层次的抽象屏蔽了底层细节，减少了管理和维护的复杂性。
命令式编程：低层次的抽象需要管理更多的细节，增加了复杂性和出错的可能性。
可读性和维护性：

声明式编程：代码简洁明了，逻辑清晰，容易阅读和维护。
命令式编程：代码详细繁琐，逻辑可能复杂，难以阅读和维护。
总结来说，声明式编程通过提高抽象层次和简化思维模式，减少了开发者的心智负担，使得代码更易读、更易维护。而命令式编程虽然提供了更多的控制，但也增加了复杂性和心智负担，容易导致错误和维护困难。