The **wave function** $\Psi$ is the primary object of study in quantum mechanics. It is a function of [[space]] and [[time]] and contains information about the probability of seeing a particle somewhere. The wave function evolves as the [[Schrodinger equation]]. The [[Born rule]] tells us how to convert the wave function into an empirical prediction.

Formally, we treat it as a [[ray]] in [[Hilbert space]].

# Normalization

We will often need to normalize the wave function to interpret the probabilities as a [[probability density function]]. This will require that

$$
\int_{\RR} \dd{x} \cdot \rho(x, t) = 1
$$

The Schrodinger equation will return normalized wave functions if given normalized wave functions.

A normalizable function will need to have finite area, and is therefore 0 at $\pm \infty$.

# Multiple particles

When you have multiple particles, the wave function looks like

$$
\Psi(\mathbf{r}_1, \mathbf{r}_2, t)
$$

Suppose the particles don't interact. Then maybe we call $\psi_a(\mathbf{r})$ the one-particle state for particle number 1 and $\psi_b(\mathbf{r})$ for the second and then say

$$
\psi(\mathbf{r}_1, \mathbf{r}_2) = \psi_a(\mathbf{r}_1)\psi_b(\mathbf{r}_2)
$$