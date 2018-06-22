# Introduction

Sets can be described like so, with a predicate function $P(x)$

\begin{equation}
S = \\{ x \in M\, | \, P(x) \\}
\end{equation}

# Set Operations

The union operation creates a new set composed of all the elements from its operands.

\begin{equation}
A \cup B = \\{x \, | \, x \in A\text{ or } x \in B\\}
\end{equation}

The intersection operation returns a set composed only of elements shared by both.

\begin{equation}
A \cap B = \\{x \, | \, x \in A\text{ and } x \in B\\}
\end{equation}

The set difference operation returns a set of elements only in the first operand, not in the second.

\begin{equation}
A \,\backslash\, B = \\{ {x \, | \, x \in A\text{ and } x \not\in B} \\}
\end{equation}

We can also write $\bar{A}$ to denote all elements of a universal set $U$ that are not part of the subset $A$.


## Ordered Pairs

\begin{equation}
(x,y) = \\{ \\{x\\}, \\{x,y \\} \\}
\end{equation}

We can create ordered pairs from sets using the Cartesian product.

\begin{equation}
A\times{B} = \\{(a,b) \,|\, a \in A\text{ and }b \in B\\}
\end{equation}

The product can be applied multiple times, so, for example,

\begin{equation}
\mathbb{R}^n = \underbrace{\mathbb{R}\times\mathbb{R}\times\dots\times\mathbb{R}\times\mathbb{R}}_{\text{n times}}
\end{equation}

## DeMorgan's Laws
\begin{equation}
\overline{A\cup{B}} = \bar{A}\cap{\bar{B}}
\end{equation}

\begin{equation}
\overline{A\cap{B}} = \bar{A}\cup{\bar{B}}
\end{equation}

Simply put, all the elements that are not in A or B is the same as all the elements not in A and all the elements not in B.
