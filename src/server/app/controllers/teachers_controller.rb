class TeachersController < ApplicationController
    before_action :find_teacher, only: [:show, :edit, :update, :destroy]
    def new
      @teacher = Teacher.new
    end
  
    def create
      @teacher = Teacher.new teacher_params
      @availability = Availability.new availability_params
      @availability.teacher = @teacher
      @teacher.user = current_user
      byebug
      if @teacher.save && @availability.save
        redirect_to teacher_path(@teacher.id)
      else
        render :new
      end
    end
  
    def show
      @review = Review.new
      @reviews = @teacher.reviews.order(created_at: :desc)
      @favourite = @teacher.favourites.find_by_user_id current_user if user_signed_in?

      unless @teacher.reviews.empty?
      @avg_rating = @teacher.reviews.average(:rating).floor(2).to_f
      end

    end
  
    def index
      @languages = Language.all
        if params[:language]
          @language = Language.find_or_initialize_by(name: params[:language])
          @teachers= @language.teachers.order(created_at: :DESC)
        else
          @teachers = Teacher.order(created_at: :DESC)
        end
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
      redirect_to teachers_path
    end

    def teacher_dashboard
        @teacher = current_user.teacher
        @requested_lessons = @teacher.lessons.where(aasm_state: "requested")
        @approved_lessons = @teacher.lessons.where(aasm_state: "approved")
        @payed_lessons = @teacher.lessons.where(aasm_state: "payed")
    end

    private
  
    def teacher_params
      params.require(:teacher).permit(:description, :price, :address, :language_names, availabilities_attributes: [:day, :morning, :afternoon, :evening])
    end
  
    def availability_params
      params.permit(:day, :morning, :afternoon, :evening)
    end
  
    def find_teacher
      @teacher = Teacher.find(params[:id])
    end
end
