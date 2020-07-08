**Computer science** is the science of computation, the means by which we give incontrovertible answers to unambiguous problems.

Problem
: A problem contains input(s) and a precise description of output(s) that one wants from those inputs.

Algorithm
: A proposed solution to a problem in the form of a sequence of steps one must take. The steps should be such that anyone can follow them correctly.

As a rough example by analogy, each entry in a cookbook gives a high-level "algorithm" for creating a dish. More relevant examples are mathematical equations in the sciences where students rearrange to compute for a variable of interest.

Crucial to the practicable use of computer science is determining the language in which one wants to describe an algorithm, especially since this language must be clear enough to the reader that they can reproduce the results. Any system which can follow the procedure can be called a computer.

When such a language is chosen, the algorithm can be given to a "computer," which will produce the results exactly as specified. A computer used to refer to a person; today it refers to machines which can perform basic logic and arithmetic using electric circuits. Prior to the widespread use of electricity as the basis of compute, Charles Babbage and others worked on mechanical machines. Of course, for practical purposes one must be interested to a extent in the construction of computers, but as the quote goes,

> Computer science is no more about computers than astronomy is about telescopes.

The field of computer engineering is more interested in how to create the basis of general compute from electrical structures.

Regardless of who does the computation, a problem may be solved by a number of algorithms. The computer scientist is then interested in determining the properties of these algorithms. Every algorithm demands a payment of time and space, and it is desirable to use as little of these as possible. For example, there are many sorting algorithms, each of which has its own advantages and disadvantages.

On the other hand, it often does not matter _which_ specific algorithm is used, so long as it is not prohibitively expensive. A key idea in computing is the idea of **abstraction**, in which one relies on an algorithm without having to know exactly how it works internally. Structurally, this allows the programmer to swap sorting algorithms as he pleases because the rest of the code doesn't actually know how it works internally, just relying on that piece of the program to do its job.

Because computer science is grounded both in this algorithm analysis and in electrical circuits, mathematics often provides the natural language for dealing with computation, especially when numbers are involved. The mathematical analysis can provide theoretical guarantees or show us which of various equivalent methods is best for our use case.