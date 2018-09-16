Precious::App.set(:wiki_options, { 
    :universal_toc => true ,
    :live_preview => true,
    :allow_uploads => true
})

GitHub::Markup::Markdown::MARKDOWN_GEMS['kramdown'] = proc { |content|
  Kramdown::Document.new(content, :auto_ids => false).to_html
}