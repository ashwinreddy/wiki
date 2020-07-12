**Actor-critic** is an architecture/structure for an RL algorithm where you have an actor that updates the policy and a critic estimates the [[action-value function]], and you alternate between policy evaluation and policy improvement. 

In policy evaluation, you update the Q function. In policy improvement, you pick the policy to maximize the Q values.