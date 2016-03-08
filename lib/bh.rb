require 'v8'
require 'json'

class BH
  def initialize template_file
    @ctx = V8::Context.new
    @ctx.eval File.read(template_file)
  end

  def apply input
    @ctx.eval "bh.apply(#{input.to_json})"
  end
end
