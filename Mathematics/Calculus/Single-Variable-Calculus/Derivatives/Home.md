# Introduction

The **derivative** is a linear operator that gives the local slope of a function.

# Definition


\begin{equation}
\deriv{f(x)}{x} = \lim_{h\to 0}\frac{f(x+h)-f(x)}{h}
\end{equation}


# Chain Rule

## Simple Form

\begin{equation}
\diff{f(g(x))} = f'(g(x))g'(x)\diff{x}
\end{equation}

## General Form
Let $f(x)=(f_1 \circ f_2 \circ \dots \circ f_n)(x)$. For notational simplicity, define $f_{a\dots b}=f_a \circ f_{a+1}\circ \dots \circ f_{b-1} \circ f_b$. Then, the chain rule says

\begin{equation}
f_{1\dots n}' = \prod_{k=1}^n f_k'\left(\,f_{(k+1)\dots n}\,\right)
\end{equation}
