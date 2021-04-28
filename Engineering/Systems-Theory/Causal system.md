A **causal system** depends on past and current inputs but not future inputs. This means the [[impulse response]] is right-handed signal, i.e. 

$$
\forall t < 0: h(t) = 0.
$$

$$
\forall n < 0 : h[n] = 0.
$$

# Conditions for LTI System

If a [[linear time-invariant system]] is causal, then it has a right-sided impulse. So the region of convergence of its [[transfer function]] $H(s)$ is a right-sided plane. In particular, when $H(s)$ is rational, then the system is causal if and only if its ROC is the right half plane to the right of the rightmost pole, and the order of numerator is no greater than that of the denominator.