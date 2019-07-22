A **Markov decision process (MDP)** describes an environment that provides rewards to an agent who can take actions to influence the environment. An MDP consists of a number of elements:

- A set of states $\mathcal{S}$
- A set of actions $\mathcal{A}$
- A transition function $P: \mathcal{S} \times \mathcal{A} \times \mathcal{S} \to [0,1]$
- A reward function $r: \mathcal{S} \times \mathcal{A}$
- An initial state distribution $p(s_0)$
- A discount factor $\gamma \in [0,1]$[^gamma]


[^gamma]: Unlike the rest of the elements,$\gamma$ is more a hyperparameter than inherently part of the environment.