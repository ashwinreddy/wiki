#!/bin/bash
gollum --mathjax --critic-markup --config config.rb --js --lenient-tag-lookup --emoji --allow-uploads dir ./ --css --no-display-metadata
#gollum --mathjax --no-display-metadata --lenient-tag-lookup --config config.rb
