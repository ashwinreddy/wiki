# Introduction

A vector belongs to the space $\mathbb{R}^n$.

# Operations

## Addition
\begin{equation}
\vec{a}+\vec{b} = \sum_i (a_i+b_i)\mathbf{e}_i
\end{equation}

## Scalar Multiplication

\begin{equation}
c\vec{v} = \sum_i cv_i\mathbf{e}_i
\end{equation}

## Dot Product

\begin{equation}
\vec{a}\cdot\vec{b} = \sum_i a_{i}b_{i}
\end{equation}

## Magnitude

\begin{equation}
\lvert\vec{a}\rvert = \sqrt{\vec{a}\cdot\vec{a}}
\end{equation}


## Normalize

\begin{equation}
\hat{a} = \frac{\vec{a}}{|\vec{a}|}
\end{equation}

## Cross Product

If both vectors belong to $\mathbb{R}^3$,

\begin{equation}
\vec{a}\times\vec{b} = \begin{vmatrix}
\mathbf{\hat{i}} & \mathbf{\hat{j}} & \mathbf{\hat{k}} \\\
a_1 & a_2 & a_3 \\\
b_1 & b_2 & b_3
\end{vmatrix}
\end{equation}

Since the cross product is computed as a [[determinant]], it represents an area, namely the area of the parallelogram spanned by the vectors.

\begin{equation}
\lvert \vec{a}\times\vec{b}\rvert = ab \sin \theta
\end{equation}

Technically speaking, the cross product returns not a vector but a pseudovector.
