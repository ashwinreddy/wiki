**Pullbacks** are a generalization of [integration by substituion](./Integral)


Precomposition with a function probably provides the most elementary notion of pullback: in simple terms, a function f of a variable y, where y itself is a function of another variable x, may be written as a function of x. This is the pullback of f by the function y.

\begin{equation}
f(y(x)) \equiv g(x) \implies (f\circ y) = g
\end{equation}

In differential geometry,

the pullback allows us to take, for example, a surface in ambient space $\mathbb{R}^3$ can be defined parametrically by two parameters $u$ and $v$. We want to integrate the surface, so pullback to $\mathbb{R}^2$.

The pullback $\Phi*$
  
\begin{equation}
(\Phi^*)F(v_1, \dots, v_n) = F(\Phi(v_1), \dots, \Phi(v_n))
\end{equation}

On $\mathbb{R}^n$, up to $n$ forms.

Properties:

- $\mathrm{d}(\mathrm{d}x)=0$
- $\mathrm{d}(F\,\mathrm{d}x)=\mathrm{d}F\wedge\mathrm{d}x$
