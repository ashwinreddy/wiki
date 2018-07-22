https://en.wikipedia.org/wiki/Free_variables_and_bound_variables

## Differential Equations

### Population Dynamics

#### Exponential Growth

Imagine a bacterium that doubles at some rate. We can model the number of bacteria in the population using the following ODE and initial condition.

$$
\dot{N}(t) = rN(t) \qquad N(0) = N_0
$$

The solution, of course, is just 

$$
N = N_0e^{rt}
$$

This imagines that there are no constraints on the growth of the sample.

#### Logistic Growth

$$
\dot{N}(t) = rN(t)\left(1-\frac{N}{k}\right)
$$
