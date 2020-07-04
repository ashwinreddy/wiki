The **likelihood function** $L(\theta)$ measures how likely a set of parameters $\theta$ are to be "correct." Recall that a probability function for a parameterized distribution tells us the probability of seeing a given data point. In other words, we usually think about querying the function by asking "how likely do you think I am to see this data point?" Here, we assume that the parameter $\theta$ has already been set, and we are asking about an arbitrary data point. On the other hand, the likelihood function rephrases the query by assuming that the parameter is as yet unknown and we have data in hand. Here, the question is how likely we are to have _generated_ this data with a possible parameter.

$$
L(\theta) = p_\theta (\vec{y})
$$

For example, if $p$ is the pdf for a Gaussian, the question is with what probability the Gaussian of mean $\theta$ would assign the data. We typically assume that the data is i.i.d. so 