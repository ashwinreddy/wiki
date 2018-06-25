# Introduction

## 0-form

Working in the space $\mathbb{R}^n$, a 0-form looks like 

\begin{equation}
\omega = f\left(\vec{x}\right) \qquad \vec{x}\in\mathbb{R}^n \qquad f \in \mathcal{C}^1
\end{equation}

## 1-form

A 1-form looks like

\begin{equation}
\omega = \sum_i {F_i\left(\vec{x}\right)\diff{x_i}}
\end{equation}

A concrete example is $P\,\diff{x}+Q\,\diff{y}+R\,\diff{z}$ for $\mathbb{R}^3$. We can, for example, compute its line integral
\begin{equation}
\int_C{P\,\diff{x}+Q\,\diff{y}+R\,\diff{z}}=\defint{a}{b}{\left[P(x(t),y(t),z(t))\deriv{x}{t}+Q(x(t),y(t),z(t))\deriv{y}{t}+R(x(t),y(t),z(t))\deriv{z}{t}\right]}{t}
\end{equation}

Imagine also that this 1-form is also a function on a vector $\langle(a,b,c)\rangle$ at a point $(x_0,y_0,z_0)$
\begin{equation}
\left(P\,\diff{x}+Q\,\diff{y}+R\,\diff{z}\right)(a,b,c) = P(x_0,y_0,z_0)a+Q(x_0,y_0,z_0)b+R(x_0,y_0,z_0)c
\end{equation}

In the differential forms setup, the "gradient" is now

\begin{equation}
\diff{f} = \frac{\partial f}{\partial x}\diff{x} + \frac{\partial f}{\partial y}\diff{y} + \frac{\partial f}{\partial z}\diff{z}
\end{equation}

$\diff{f}$ is called an exact 1-form here.

## 2-Form

The basic differential 2-form looks like 

\begin{equation}
\omega = \diff{x_i}\wedge\diff{x_j} \qquad 1 \leq i, j \leq n
\end{equation}

The general form is
\begin{equation}
\omega = \sum_{1\leq i \lt j \leq n}{F_{ij}\left(\vec{x}\right)\diff{x_i}\wedge\diff{x_j}}
\end{equation}

Whereas a 1-form eats one vector, a 2-form eats a parallelogram (which we can think of as being formed by 2 vectors).

\begin{equation}
\int_S{\diff{x}\wedge\diff{y}} = \text{area of shadow of surface of $S$ on $xy$ plane}
\end{equation}

\begin{equation}
\int_S{f(x,y,z)\diff{x}\wedge\diff{y}}
\end{equation}


# Generalized Stoke's Theorem

$k$-forms integrate on a $k$-[manifold](./Manifold)

\begin{equation}
\int_{\partial M}{\omega} = \int_{M}\diff{\omega}
\end{equation}

# Wedge Product

For row vectors $\vec{u}$ and $\vec{v}$

\begin{equation}
\vec{u}\wedge\vec{v} = \frac{1}{2}\left[\vec{u}^\mathsf{T}\vec{v} - \vec{v}^\mathsf{T}\vec{u} \right]
\end{equation}

- $\diff{x_i}\wedge\diff{x_j} = -\diff{x_j}\wedge\diff{x_i}$
- $\diff{x_i}\wedge\diff{x_i}=0$