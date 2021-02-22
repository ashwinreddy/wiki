A **time-invariant system** is a system that is not a direct function of time.



Generally, if a system stretches, squeezes, reflects a signal, or directly references the time parameter, it won't be time-invariant.

# Test

A system is time-invariant if delaying the input $x(t + t_0)$ directly equates to a time-delay on the output $y(t + t_0)$.

For example, $y(t) = tx(t)$ is not time-invariant since $(t + t_0)x(t) \neq t x(t + t_0)$.