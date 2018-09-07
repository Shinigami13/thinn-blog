class PostsController < ApplicationController
  def new
    @post = Post.new
  end

  def create
    @post = Post.new(post_params)
    if @post.save
      redirect_to '/posts'
    else
      render 'new'
    end
  end

def show; end

def index
  @posts = Post.all.order("created_at ASC")
end

def edit
end

def update
  if @post = Post.update(post_params)
   redirect_to @pic, notice: 'Congrats! Pic was updated!'
 else
   render 'edit'
  end
end

private
def post_params
  params.require(:post).permit(:photo, :caption)
end

def find_post
@post = Post.find(params[:id])
end

end
