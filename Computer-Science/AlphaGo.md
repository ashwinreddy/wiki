**AlphaGo** is a program that plays Go using an [[artificial neural network]] and a tree search. It uses **value networks** to evaluate board positions and **policy networks** to select moves. The networks are supervised from human expert games and also engage in RL through self-play.

First they pre-trained a policy network $p_\sigma(a \mid s)$ from expert moves and then tuned it with RL to become $p_\rho$. To do this, they played the current $p_\rho$ aginst a randomly selected previous iteration of the policy network.

[[/uploads/mcts-alphago.png]]