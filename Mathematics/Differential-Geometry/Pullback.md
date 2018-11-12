In [[differential geometry]], **pullbacks** are a generalization of [integration by substitution](../Integral#integration-by-substitution). As Tao summarizes,

\\[
\int_{\Phi(S)}\omega = \int_S \Phi^*(\omega)
\\]

So for example, with scalar functions, $\Phi^*f(x)=f(\Phi(x))$. 


Precomposition with a function probably provides the most elementary notion of pullback: in simple terms, a function f of a variable y, where y itself is a function of another variable x, may be written as a function of x. This is the pullback of f by the function y.

\begin{equation}
f(y(x)) \equiv g(x) \implies (f\circ y) = g
\end{equation}

the pullback allows us to take, for example, a surface in ambient space $\mathbb{R}^3$ can be defined parametrically by two parameters $u$ and $v$. We want to integrate the surface, so pullback to $\mathbb{R}^2$.

The pullback $\Phi*$
  
\begin{equation}
(\Phi^*)F(v_1, \dots, v_n) = F(\Phi(v_1), \dots, \Phi(v_n))
\end{equation}