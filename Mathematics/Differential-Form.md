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
\left(P\,\diff{x}+Q\,\diff{y}+R\,\diff{z}\right)(a,b,c) = Pa+Qb+Rc
\end{equation}

## 2-Form

The basic differential 2-form looks like 

\begin{equation}
\omega = \diff{x_i}\wedge\diff{x_j} \qquad 1 \leq i, j \leq n
\end{equation}


The general form is
\begin{equation}
\omega = \sum_{1\leq i \lt j \leq n}{F_{ij}\left(\vec{x}\right)\diff{x_i}\wedge\diff{x_j}}
\end{equation}


# Generalized Stoke's Theorem

$k$-forms integrate on a [$k$-manifold](./Manifold)

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