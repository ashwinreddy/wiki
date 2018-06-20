# Introduction

The **derivative** is a linear operator that gives the local slope of a function.

\begin{equation}
\deriv{f(x)}{x} = \lim_{\epsilon\to 0}\frac{f(x+\epsilon)-f(x)}{\epsilon}
\end{equation}

This means that the derivative loses information about the y-intercept.

# Chain Rule

In its simplest form, the chain rule says

\begin{equation}
\deriv{f(g(x))}{x} = \deriv{f(g(x))}{g(x)}\deriv{g(x)}{x}
\end{equation}

We can extend this idea to a more general form. Let $f(x)=(f_1 \circ f_2 \circ \dots \circ f_n)(x)$. For notational simplicity, define $f_{a\dots b}=f_a \circ f_{a+1}\circ \dots \circ f_{b-1} \circ f_b$. Then, the chain rule says

\begin{equation}
f_{1\dots n}' = \prod_{k=1}^n f_k'\left(\,f_{(k+1)\dots n}\,\right)
\end{equation}

# Product Rule

The product rule determines how to compute the derivative of a product between functions.

\begin{equation}
\left(\,f\cdot{g}\,\right)' = f'g + g'f
\end{equation}

# L'Hôpital's Rule

\begin{equation}
\end{equation}

# Implicit Differentiation

If $F(x,y)=k$,

\begin{equation}
\frac{\mathrm{d}y}{\mathrm{d}x} = -\frac{\partial_x F}{\partial_y F}
\end{equation}

# References

[Wikipedia article](https://en.wikipedia.org/wiki/Implicit_function#Implicit_differentiation)