**Bayes' theorem** tells you how to update your prior beliefs given new information. Suppose you have a hypothesis. The prior is how likely you think this hypothesis to be true. You then observe some evidence. Bayes' theorem says that your new belief in the hypothesis, known as the posterior, is found by scaling the prior by a factor of the likelihood of seeing this evidence given the hypothesis divided by the probability you'd see this evidence anyway.

\begin{equation}
\text{Posterior} = \frac{\text{Likelihood}}{\text{Evidence}}\times\text{Prior}
\end{equation}

We now consider how the posterior responds to each factor independently, _ceteris paribus_.

* When the prior increases or decreases, the posterior likewise increases or decreases. This is intuitive.
* When the probablity of seeing the evidence goes up, the posterior probability decreases. That means this event happens more frequently, so one should not be quick to infer much from it.
* When the probability of seeing the evidence goes down, the posterior probability increases. The event happens less frequently, so one can infer more from it.
* When the likelihood of the evidence given the hypothesis increases or decreases, the posterior responds the same. 


\begin{equation}
\Pr (A | B) = \frac{\Pr(B|A)}{\Pr(B)}\Pr(A)
\end{equation}
