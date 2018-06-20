# Introduction

The **derivative** is a linear operator that gives the local slope of a function.

# Definition


\begin{equation}
\deriv{f(x)}{x} = \lim_{\epsilon\to 0}\frac{f(x+\epsilon)-f(x)}{\epsilon}
\end{equation}

# Derivative Rules

## Chain Rule

### Simple Form

\begin{equation}
\deriv{f(g(x))}{x} = \deriv{f(g(x))}{g(x)}\deriv{g(x)}{x}
\end{equation}

### General Form
Let $f(x)=(f_1 \circ f_2 \circ \dots \circ f_n)(x)$. For notational simplicity, define $f_{a\dots b}=f_a \circ f_{a+1}\circ \dots \circ f_{b-1} \circ f_b$. Then, the chain rule says

\begin{equation}
f_{1\dots n}' = \prod_{k=1}^n f_k'\left(\,f_{(k+1)\dots n}\,\right)
\end{equation}

## Product Rule

The product rule determines how to compute the derivative of a product between functions.

\begin{equation}
\left(\,f\cdot{g}\,\right)' = f'g + g'f
\end{equation}