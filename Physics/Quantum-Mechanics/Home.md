**Quantum mechanics** is the physics of small particles. 

[[_TOC_]]


# Comparison to classical mechanics

It differs from classical mechanics, which generally corresponds to our physical intuitions more, in the following ways:

|Quantum Mechanics|Classical Mechanics|
|-----------------|-------------------|
|State of system is captured by [[wave function]]|State of system is captured by observable values (position, velocity, etc.)|
|Observables are linear Hermitian operators||
|Superposition: we can add states with arbitrary coefficients|

Since quantum mechanics is fundamentally probabilistic, we import the tools of probability. In addition, quantum mechanics develops its own notation to handle these complexities. For example, we use [[expected value]] to capture the mean of a distribution.

$$
\langle x \rangle = \int \dd{x} \cdot x \rho(x)
$$

Thus, the [[standard deviation]] is 

$$
\sigma_x = \sqrt{ \langle x^2 \rangle - \langle x \rangle^2 }
$$

Every value in quantum mechanics depends on [[position]] and [[momentum]]:

$$
\langle Q(x, p) \rangle = \int \Psi^* \left[Q(x, -\iota\hbar \partial / \partial x)\right]\Psi \dd{x}
$$

# Resources

* Physics 137A Lecture [Notes](https://www.dropbox.com/sh/k90tk6ukc4fshyt/AACWF4D2TIweyNcodpRBFyDMa?dl=0), which follows Griffiths pretty closely.

https://www.dhruvonmath.com/2020/07/19/quantum-computers/#