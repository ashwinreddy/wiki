## 0-form

Working in the space $\mathbb{R}^n$, a 0-form looks like 

\begin{equation}
\omega = f\left(\vec{x}\right) \qquad \vec{x}\in\mathbb{R}^n
\end{equation}

## 1-form

A 1-form looks like

\begin{equation}
\omega = \sum_i {F_i\left(\vec{x}\right)\diff{x_i}}
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


# Integration

$k$-forms integrate on a [$k$-manifold](./Manifold)

\begin{equation}
\int_M{\omega} = \defint{a}{b}{\omega\left(\vec{X}\prime(t)\right)}{t}
\end{equation}

# Wedge Product

For row vectors $\vec{u}$ and $\vec{v}$

\begin{equation}
\vec{u}\wedge\vec{v} = \frac{1}{2}\left[\vec{u}^\mathsf{T}\vec{v} - \vec{v}^\mathsf{T}\vec{u} \right]
\end{equation}

- $\diff{x_i}\wedge\diff{x_j} = -\diff{x_j}\wedge\diff{x_i}$
- $\diff{x_i}\wedge\diff{x_i}=0$