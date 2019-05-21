class TeachersController < ApplicationController
    before_action :find_teacher, only: [:show, :edit, :update, :destroy]
    def new
      @teacher = Teacher.new
    end
  
    def create
      @teacher = Teacher.new teacher_params
      @teacher = current_user
      if @teacher.save
        redirect_to teacher_dashboard_teacher_path(@teacher)
      else
        render :new
      end
    end
  
    def show
      @review = Review.new
      @reviews = @teacher.reviews.order(created_at: :desc)
      @favourite = @teacher.favourites.find_by_user_id current_user if user_signed_in?
    end
  
    def index
        @teachers = Teacher.all.order(created_at: :desc)
        # if params[:languguage]
        #   @language = Language.find_or_initialize_by(name: params[:language])
        #   @teachers= @language.teachers.order(created_at: :DESC)
        # else
        #   @teachers = Teacher.order(created_at: :DESC)
        # end
    end
  
    def edit
      # if !can?(:edit, @question)
      #   redirect_to root_path, alert: 'Not authorized'
      # end
    end
  
    def update
      if @teacher.update teacher_params
        redirect_to teacher_path(@teacher.id)
      else
        render :edit
      end
    end
  
    def destroy
      @teacher.destroy
      redirect_to root_path
    end

    def teacher_dashboard

    end
  
    private
  
    def teacher_params
      params.require(:teacher).permit(:description, :price,:area)
    end
  
    def find_teacher
      @teacher = Teacher.find(params[:id])
    end
end
