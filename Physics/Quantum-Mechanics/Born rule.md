The **Born rule** interprets the [[wave function]] $\Psi(x, t)$  in the following way:

$$
\rho(x, t) \doteq |\Psi(x, t) |^2
$$

Then $\rho(x,t)$ represents the [[probability density function]] for finding a particle at $x$ at time $t$. In this way,

$$
\Pr(a \leq x \leq b) = \int_a^b \dd{x} \cdot \rho(x,t)
$$

What does this mean experimentally? 

1. If we ran the experiment $N \gg 1$ times in parallel at different locations in a lab (which have all somehow been set up with the proper initial conditions), then the histogram of measurements would, in the limit, converge to this pdf.
2. Run it may times with the same set up, resetting each time. Once we measure the position of the particle, the wave function collapses to position eigenstate with 100% probability at $x_0$ forevermore. [^tech]


[^tech]: It seems like we have a 2nd evolution law that is not the Schrodinger equation, but this is just an artefact of not including the environment in the equation. If we were very careful, there would be no need for 2 rules.