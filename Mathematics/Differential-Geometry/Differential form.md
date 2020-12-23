---
bibliography: "./Mathematics/math.bib"
---

A **differential form** is, roughly speaking, an object that we can [[integrate|integral]]. Recall that an integral is computing the accumulation of some value over a path. Then, operationally,

> a differential form is a rule for assigning to each “infinitesimal $n$-cube” a number. [@df]

# Formalism

A differential 1-form on a manifold $M$ would be a [[linear map]] on the [[tangent bundle]] $\alpha: TM \to \RR$:

$$
\omega^1 = b_1 \dd{x}_1 + b_2 \dd{x}_2 + \ldots + b_n \dd{x}_n.
$$

where $b_i$ is a function of the $x_j$'s.

# Types

Closed form
: An $n$-form $\omega$ is closed if $\dd{\omega} = 0$.

Exact form
: An $n$-form $\omega$ is exact if $\omega = \dd{\eta}$ for some $\eta$


Every exact form is closed by virtue of 

\begin{equation}
\dd{}^2 = 0.
\end{equation}

---